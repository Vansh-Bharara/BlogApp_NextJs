import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { handleSubmission } from "@/app/actions";
import { SubmitButton } from "@/components/general/SubmitButton";

export default function createBlogRoute(){
    return (
        <div>
            <Card className="max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle>Create Post</CardTitle>
                    <CardDescription>Create a new post to share with the world</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4" action={handleSubmission}>
                        <div className="flex flex-col gap-2">
                            <Label>Title</Label>
                            <Input required name="title" type="text" placeholder="Title"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Content</Label>
                            <Textarea required name="content" placeholder="Content"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Image URL</Label>
                            <Input required name="url" type="url" placeholder="Image URL"/>
                        </div>

                        <SubmitButton/>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}