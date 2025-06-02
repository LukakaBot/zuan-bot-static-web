"use client";

import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { fetchZuanList } from "@/api/zuan";
import { useLoading } from "@/hook";

function Home() {
  const [loading, setLoading] = useLoading();
  const [data, setData] = useState<string>("");

  const getData = async (level: string = "min") => {
    try {
      setLoading(true);
      const res = await fetchZuanList(level);
      setData(res);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-5 items-center">
      <Textarea placeholder="" defaultValue={data} />

      <div className="flex gap-3">
        <Button onClick={() => getData("max")}>😤火力全开</Button>
        <Button onClick={() => getData()}>🙂口吐莲花</Button>
        {/* <Button>👨骂爹模式</Button> */}
      </div>
    </div>
  );
}

export default Home;
