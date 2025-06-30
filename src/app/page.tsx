"use client"
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
export default function Home() {
  const trpc = useTRPC()
 const {data }= useQuery({
  queryKey: ['test'],
  queryFn:async ()=>trpc.hello.query({text:"nexjs"})
 })
if(data)
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}
