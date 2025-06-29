"use client";

import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { fetchZuanQuote } from "@/api/zuan";
import { useLoading } from "@/hook";
import { toast } from "sonner";

function Home() {
  const [, setLoading] = useLoading();
  const [data, setData] = useState<string>("");
  const [isCurseFatherMode, setCurseFatherMode] = useState(false);
  const [historyQuotes, setHistoryQuotes] = useState<string[]>([]);

  const getData = async (level: string = "min") => {
    try {
      setLoading(true);
      const res = await fetchZuanQuote(level);
      setData(res);
      setHistoryQuotes([...historyQuotes, res]); // 保存历史数据
    } finally {
      setLoading(false);
    }
  };

  async function copyData(data: string) {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(data);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = data;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    toast.success("复制成功");
  }

  function getPreviousQuote() {
    if (historyQuotes.length <= 1) return; // 如果只有一条数据，不做任何操作
    const newHistory = historyQuotes.slice(0, -1); // 删除最后一条数据
    const previousQuote = newHistory[newHistory.length - 1]; // 获取倒数第二条数据
    setHistoryQuotes(newHistory);
    setData(previousQuote);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="w-full">
        <Textarea
          className="min-h-[150px]"
          placeholder=""
          defaultValue={data}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Button onClick={() => getData("max")}>😤火力全开</Button>
          <Button onClick={() => getData()}>🙂口吐莲花</Button>
          <Button onClick={() => copyData(data)}>复制</Button>
          <Button onClick={getPreviousQuote}>上一条</Button>
        </div>
        <div className="flex gap-3">
          <div
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={() => setCurseFatherMode(!isCurseFatherMode)}
          >
            <Checkbox checked={isCurseFatherMode} />
            <p>👨骂爹模式</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
