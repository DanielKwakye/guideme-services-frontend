import UserProfilePhoto from "@/components/ui/UserProfilePhoto.tsx";
import {Input} from "@/components/ui/input.tsx";

function PostEditor() {
    return (
        <>
            <div className="border px-4 py-8 rounded">
                <div className="flex flex-row gap-4 items-center bg">
                    <div>
                        <UserProfilePhoto size={ {width: 9, height: 9} } />
                    </div>
                    <div className="w-full space-y-1">
                        <label htmlFor="post-editor" className="font-medium">Create New post</label>
                        <Input id="post-editor"
                               className="w-full bg-slate-50 hover:bg-white placeholder:text-sm py-6"
                               placeholder="Example: Hi Professionals, can anyone guide me on integrating LinkedIn authentication with React Native? Online resources haven't been helpful." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostEditor;