"use client";

import { useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  query: z.string().min(1),
});

const ChatPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="mx-auto flex min-h-screen flex-grow flex-col gap-7 bg-[#052427] p-10 pt-[100px] text-white">
      <h1 className="text-3xl font-bold">Chat with your Excel file</h1>
      <input
        type="file"
        accept=".xlsx, .xls"
        hidden
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      {/* Upload file */}
      <div className="flex flex-row items-center justify-between gap-4 rounded-lg border border-gray-700 bg-slate-300/10 p-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Upload your Excel file</h3>
          <p className="text-sm text-gray-400">
            Limit 10MB, supported file types: .xlsx, .xls
          </p>
        </div>
        <Button className="h-10 w-fit bg-orange-600" onClick={handleFileUpload}>
          Upload file
        </Button>
      </div>
      {/* Chat */}
      {file && (
        <>
          {/* File info */}
          <div className="flex flex-row items-center gap-4 rounded-lg border border-gray-700 p-4">
            <h1 className="text-lg font-bold">{file?.name}</h1>
            <p className="text-sm text-gray-400">
              {file?.size ? `${Math.round(file.size / 1024)} KB` : ""}
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-bold">
                      Ask a question
                    </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        className="bg-slate-300/10"
                        placeholder="shadcn"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </>
      )}
    </div>
  );
};

export default ChatPage;
