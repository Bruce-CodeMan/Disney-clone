/*
 * @Date: 2023-12-29 11:08:11
 * @Author: Bruce Hsu
 * @Description: 
 */
'use client'

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form, 
  FormControl, 
  FormField, 
  FormItem
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import * as z from "zod"

const formSchema = z.object({
  input: z.string().min(2).max(50)
})

const SearchInput = () => {

  const router = useRouter()

  // 1. Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: ""
    }
  })

  // 2. Define a submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    router.push(`/search/${values.input}`)
    form.reset()
  }

  // Build the form
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="search..." {...field}/>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default SearchInput