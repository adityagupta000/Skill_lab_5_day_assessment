"use client";
import React, { useState, useEffect } from "react";
import {
  PencilIcon,
  FileIcon,
  ShareIcon,
  AlarmCheck,
  Save,
  Trash2,
  Download,
} from "lucide-react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);                     

  const [conversations, setConversations] = useState([]);
  const [currentConvId, setCurrentConvId] = useState(null);
  const [convName, setConvName] = useState("");
  const [isNaming, setIsNaming] = useState(false);
  const [showConvList, setShowConvList] = useState(false);
  const [messages, setMessages] = useState([]);

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  useEffect(() => {
    const saved = localStorage.getItem("languageDudeConversations");
    if (saved) setConversations(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (conversations.length)
      localStorage.setItem(
        "languageDudeConversations",
        JSON.stringify(conversations)
      );
  }, [conversations]);

  useEffect(() => {
    if (currentConvId) {
      const conv = conversations.find((c) => c.id === currentConvId);
      if (conv) {
        setMessages(conv.messages || []);
        setConvName(conv.name);
      }
    } else {
      setMessages([]);
      setConvName("");
    }
  }, [currentConvId, conversations]);

  useEffect(() => {
    if (response && !isTyping) {
      setDisplayText("");
      setTypingIndex(0);
      setIsTyping(true);
    }
  }, [response]);

  useEffect(() => {
    let timer;
    if (isTyping && typingIndex < response.length) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev + response.charAt(typingIndex));
        setTypingIndex((prev) => prev + 1);
      }, 30);
    } else if (isTyping && typingIndex >= response.length) {
      setIsTyping(false);
      if (response) saveMessage({ role: "assistant", content: response });
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isTyping, typingIndex, response]);

  async function getAiResponse(userInput) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Act as a Japanese language teacher. Please respond to the following message in Japanese and provide a translation in English: ${userInput}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        setError(data.error?.message || "Failed to fetch response");
        return null;
      }
      return (
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response from AI."
      );
    } catch (error) {
      setError("An error occurred");
      return null;
    }
  }

  const createConversation = () => {
    const id = Date.now().toString();
    const newConv = {
      id,
      name: "New Conversation",
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
      messages: [],
    };
    setConversations((prev) => [...prev, newConv]);
    setCurrentConvId(id);
    setMessages([]);
    setIsNaming(true);
  };

  const updateName = () => {
    if (!currentConvId) return;
    setConversations((prev) =>
      prev.map((c) =>
        c.id === currentConvId
          ? { ...c, name: convName, updated: new Date().toISOString() }
          : c
      )
    );
    setIsNaming(false);
  };

  const saveMessage = (newMsg) => {
    const msg = { ...newMsg, timestamp: new Date().toISOString() };

    if (!currentConvId) {
      const id = Date.now().toString();
      const newConv = {
        id,
        name: `Conversation ${conversations.length + 1}`,
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
        messages: [msg],
      };
      setConversations((prev) => [...prev, newConv]);
      setCurrentConvId(id);
      setMessages([msg]);
    } else {
      const updatedMsgs = [...messages, msg];
      setMessages(updatedMsgs);
      setConversations((prev) =>
        prev.map((c) =>
          c.id === currentConvId
            ? { ...c, messages: updatedMsgs, updated: new Date().toISOString() }
            : c
        )
      );
    }
  };

  const deleteConversation = (id) => {
    setConversations((prev) => prev.filter((c) => c.id !== id));
    if (currentConvId === id) {
      setCurrentConvId(null);
      setMessages([]);
    }
  };

  const exportConversation = (id) => {
    const conv = conversations.find((c) => c.id === id);
    if (!conv) return;

    const text = conv.messages
      .map((m) => `${m.role === "user" ? "You" : "AI"}: ${m.content}`)
      .join("\n\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${conv.name.replace(/[^a-z0-9]/gi, "_")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = async () => {
    if (!input.trim()) return;

    saveMessage({ role: "user", content: input });
    setLoading(true);
    setError("");

    const aiResponse = await getAiResponse(input);
    if (aiResponse) setResponse(aiResponse);

    setLoading(false);
    setInput("");
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return (
      date.toLocaleDateString() +
      " " +
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  useEffect(() => {
    function handleClickOutside(event) {
      const convList = document.getElementById("conversation-list");
      if (
        showConvList &&
        convList &&
        !convList.contains(event.target) &&
        !event.target.closest(".file-icon-button")
      ) {
        setShowConvList(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showConvList]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-pink-600 to-blue-500 text-black overflow-hidden">
      <nav className="p-2 sm:p-4 shadow-lg bg-opacity-80 relative flex items-center justify-center">
        <div className="absolute left-2 sm:left-4 flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => setShowConvList(!showConvList)}
            className="file-icon-button p-1 sm:p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <FileIcon className="text-black w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={createConversation}
            className="p-1 sm:p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <PencilIcon className="text-black w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <h1 className="text-center text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide text-black truncate mx-16">
          Language Dude
        </h1>

        <div className="absolute right-2 sm:right-4 flex items-center space-x-2 sm:space-x-4">
          {currentConvId && (
            <>
              <button
                onClick={() => setIsNaming(true)}
                className="p-1 sm:p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors hidden sm:block"
              >
                <Save className="text-black w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={() => exportConversation(currentConvId)}
                className="p-1 sm:p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              >
                <Download className="text-black w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}
          <button className="p-1 sm:p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors hidden sm:block">
            <ShareIcon className="text-black w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="p-1 sm:p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors">
            <AlarmCheck className="text-black w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </nav>

      <div className="p-2 sm:p-4 text-center text-xl sm:text-2xl font-semibold text-black truncate">
        ことば先生 {currentConvId && !isNaming && `- ${convName}`}
      </div>

      {isNaming && (
        <div className="flex justify-center mb-2 sm:mb-4 px-4">
          <input
            type="text"
            value={convName}
            onChange={(e) => setConvName(e.target.value)}
            className="p-2 rounded-l-lg bg-white bg-opacity-70 text-black focus:outline-none w-48 sm:w-64"
            placeholder="Conversation name"
          />
          <button
            onClick={updateName}
            className="bg-green-500 text-black px-3 sm:px-4 py-2 rounded-r-lg"
          >
            Save
          </button>
        </div>
      )}

      {showConvList && (
        <div
          id="conversation-list"
          className="absolute top-16 sm:top-20 left-2 sm:left-4 z-10 bg-white bg-opacity-90 p-3 sm:p-4 rounded-lg shadow-lg w-60 sm:w-64 max-h-72 sm:max-h-96 overflow-y-auto"
        >
          <h2 className="font-bold mb-2">Your Conversations</h2>
          {conversations.length === 0 ? (
            <p>No saved conversations yet</p>
          ) : (
            <ul className="space-y-2">
              {conversations.map((c) => (
                <li
                  key={c.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <button
                    onClick={() => {
                      setCurrentConvId(c.id);
                      setShowConvList(false);
                    }}
                    className="text-left text-sm truncate flex-grow hover:text-blue-600"
                  >
                    {c.name}
                    <div className="text-xs text-gray-500">
                      {formatDate(c.updated)}
                    </div>
                  </button>
                  <button
                    onClick={() => deleteConversation(c.id)}
                    className="text-red-500 ml-2"
                  >
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <button
            className="mt-3 sm:mt-4 w-full bg-blue-500 text-white p-2 rounded-lg text-sm"
            onClick={createConversation}
          >
            New Conversation
          </button>
        </div>
      )}

      {currentConvId && (
        <div className="sm:hidden flex justify-center space-x-3 mb-2">
          <button
            onClick={() => setIsNaming(true)}
            className="bg-white bg-opacity-20 p-2 rounded-full"
          >
            <Save className="text-black w-5 h-5" />
          </button>
          <button className="bg-white bg-opacity-20 p-2 rounded-full">
            <ShareIcon className="text-black w-5 h-5" />
          </button>
        </div>
      )}

      <div className="flex-grow overflow-y-auto p-3 sm:p-6">
        {messages.length > 0 ? (
          <div className="w-full max-w-2xl mx-auto space-y-3 sm:space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 sm:p-4 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-100 ml-6 sm:ml-12 mr-1 sm:mr-2"
                    : "bg-white bg-opacity-70 mr-6 sm:mr-12 ml-1 sm:ml-2"
                }`}
              >
                <div className="font-bold mb-1">
                  {msg.role === "user" ? "You" : "AI"}
                </div>
                <p className="whitespace-pre-wrap text-sm sm:text-base">
                  {msg.content}
                </p>
                <div className="text-xs text-right mt-1 text-gray-500">
                  {formatDate(msg.timestamp)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-white text-opacity-70 text-base sm:text-lg text-center px-4">
              {conversations.length === 0
                ? "Start a new conversation below"
                : "Select a conversation or start a new one"}
            </p>
          </div>
        )}
      </div>

      <div className="p-3 sm:p-6">
        <div className="w-full max-w-2xl mx-auto">
          {isTyping && (
            <div className="mb-3 sm:mb-4 bg-white bg-opacity-70 p-3 sm:p-4 rounded-lg">
              <p className="font-bold text-sm sm:text-base">AI is typing:</p>
              <p className="whitespace-pre-wrap text-sm sm:text-base">
                {displayText}
                <span className="inline-block animate-pulse text-xl sm:text-2xl">
                  ▌
                </span>
              </p>
            </div>
          )}
          <div className="flex space-x-2 sm:space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="Type your message..."
              className="flex-grow p-3 sm:p-4 rounded-lg shadow-inner bg-white bg-opacity-70 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              disabled={loading || isTyping}
            />
            <button
              onClick={handleSubmit}
              disabled={loading || isTyping || !input.trim()}
              className={`${
                loading || isTyping || !input.trim()
                  ? "bg-gray-400"
                  : "bg-red-600 hover:bg-red-700"
              } text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg transition-all duration-200 text-sm sm:text-base`}
            >
              {loading ? "..." : isTyping ? "..." : "Send"}
            </button>
          </div>

          {error && (
            <div className="mt-3 sm:mt-4 bg-red-600 bg-opacity-80 p-3 sm:p-4 rounded-lg text-white text-sm sm:text-base">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
