"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { fetchZuanQuote } from "@/api/zuan";
import { useLoading } from "@/hook";

function Home() {
  const [, setLoading] = useLoading();
  const [data, setData] = useState<string>("");
  const [isCurseFatherMode, setCurseFatherMode] = useState(false);

  const getData = useCallback(async (level: string = "min") => {
    try {
      setLoading(true);
      const res = await fetchZuanQuote(level);
      setData(res);
    } finally {
      setLoading(false);
    }
  }, []);

  function copyData(data: string) {
    console.log(data);
    navigator.clipboard.writeText(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="w-full">
        <Textarea className="min-h-[150px]" placeholder="" defaultValue={data} />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Button onClick={() => getData("max")}>😤火力全开</Button>
          <Button onClick={() => getData()}>🙂口吐莲花</Button>
          <Button onClick={() => copyData(data)}>复制</Button>
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
