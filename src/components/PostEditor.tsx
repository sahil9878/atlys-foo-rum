import { useState } from 'react';
import BorderWithFooterContent from './atomic/BorderWithFooterContent';
import IconButton from './atomic/IconButton';
import { AddIcon, MicIcon, CameraIcon, PublishIcon, EmojiIcon, BinIcon, TextBoldIcon, TextItalicIcon, TextUnderlinedIcon, ListOrderedIcon, ListUnorderedIcon, ScriptsIcon, QuotesIcon } from '../assets/icons'
import useFeedStore from '../stores/feed';

const noOp = () => {
    alert("function not implemented")
}
const PostEditor = () => {
    const [emoji, setEmoji] = useState("")
    const [content, setContent] = useState("")
    const clearEditor = () => {
        setEmoji("")
        setContent("")
    }

    const cycleEmojis = () => {
        const emojis = ["🥴", "🤞", "💀", "😍", "😂"]
        const currIndex = emojis.findIndex(emojiOption => emojiOption == emoji)
        setEmoji(emojis[(currIndex + 1) % emojis.length])
    }

    const { createPost } = useFeedStore()

    const publishPost = () => {
        if (!content) return
        createPost(content, emoji)
        setContent("")
        setEmoji("")
    }
    return (
        <BorderWithFooterContent size='xl'>
            <div className="bg-white rounded-xl w-full mx-auto border-neutral-200">
                <div className='p-2.5'>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex bg-gray-100 items-center gap-4 rounded-lg py-1 pl-1.5 pr-4">
                            <select onClick={noOp} className="bg-white text-gray-700 p-2 rounded md">
                                <option>Paragraph</option>
                                <option>Heading 1</option>
                                <option>Heading 2</option>
                            </select>
                            {/* Formatting buttons (Bold, Italic, Underline) */}
                            <div className='flex flex-row gap-2'>
                                <IconButton onClick={noOp}>
                                    <TextBoldIcon />
                                </IconButton>
                                <IconButton onClick={noOp}>
                                    <TextItalicIcon />
                                </IconButton>
                                <IconButton onClick={noOp}>
                                    <TextUnderlinedIcon />
                                </IconButton>
                            </div>
                            <div className='h-8 w-px bg-gray-300'></div>
                            <div className='flex flex-row gap-2'>

                                <IconButton onClick={noOp}>
                                    <ListOrderedIcon />
                                </IconButton>
                                <IconButton onClick={noOp}>
                                    <ListUnorderedIcon />
                                </IconButton>
                            </div>
                            <div className='h-8 w-px bg-gray-300'></div>

                            <div className='flex flex-row gap-2'>
                                <IconButton onClick={noOp}>
                                    <ScriptsIcon />
                                </IconButton>
                                <IconButton onClick={noOp}>
                                    <QuotesIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className='bg-red-300 rounded-[10px]'>
                            <IconButton onClick={clearEditor}>
                                <div className='p-1.5'>
                                    <BinIcon />
                                </div>
                            </IconButton>
                        </div>
                    </div>
                    <div className='flex flex-row gap-1 items-start'>
                        <IconButton onClick={cycleEmojis}>
                            {emoji ? <div className='h-4.5 w-4.5 text-lg/[18px]'>{emoji}</div> : <EmojiIcon />}
                        </IconButton>
                        <textarea
                            className="w-full p-1 resize-none rounded-md focus:outline-none "
                            rows={4}
                            placeholder="How are you feeling today?"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>

                    </div>


                </div>

                <hr className='border-neutral-200' />
                <div className='flex flex-row justify-between p-2.5 pt-1.5 items-center'>
                    <div className='flex flex-row gap-2 h-7.5'>
                        <IconButton onClick={noOp}>
                            <AddIcon />
                        </IconButton>
                        <IconButton onClick={noOp}>
                            <MicIcon />
                        </IconButton>
                        <IconButton onClick={noOp}>
                            <CameraIcon />
                        </IconButton>
                    </div>
                    <IconButton disabled={!content} onClick={publishPost}>
                        <PublishIcon />
                    </IconButton>
                </div>

            </div>
        </BorderWithFooterContent >

    );
};


export default PostEditor;
