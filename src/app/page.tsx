"use client";
import {Button} from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Plus} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const createFormSchema = z.object({
  name: z.string().min(1, {message: "Task name is required!"})
})

export default function Home() {
  const createForm = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
  })

  function onCreateTask(values: z.infer<typeof createFormSchema>) {
    // Do something with the form values.
    console.log({values})
  }

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle className="text-xl">Add new task</CardTitle>
        <CardDescription>
          Enter your information to create tasks
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...createForm}>
          <form onSubmit={createForm.handleSubmit(onCreateTask)}>
            <FormField
              control={createForm.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <div className={'flex gap-2 items-center'}>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Something to do..."
                      />
                    </FormControl>
                    <Button type={'submit'} className={'gap-1'}>
                      <Plus width={18} height={18} strokeWidth={2}/>
                      Add
                    </Button>
                  </div>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <div className={'px-6'}>
        <Separator className={'my-0'}/>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">Todo lists</CardTitle>
        <CardDescription>
          Manage your todo lists
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">

        </div>
      </CardContent>
    </Card>
  );
}
