import type React from "react";
import { useState } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";


function Task2() {


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Mouse was clicked");
        console.log(e.clientX, e.clientY);
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setValue(e.target.value)
    }

    const handleChangeArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value);
    }

    //====================================================================================

    const [text, setText] = useState<string>('')
    const [value, setValue] = useState<string>('')
    const [formValues, setFormValues] = useState({ name: '', email: '' })

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setText(e.target.value)
        console.log(text);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form was submitted");
    }

    const handleDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log('Key pressed:', e.key);
        if(e.key === "Enter"){
            setValue('')
        }
    }

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log('Focused element:', e.currentTarget);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((currentValues) => ({
            ...currentValues,
            [name]: value,
        }));
    }

    const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('target:', e.target);
        console.log('currentTarget:', e.currentTarget);
    }

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        console.log('scrollTop:', e.currentTarget.scrollTop);
    }

    const handleCopy = (e: React.ClipboardEvent<HTMLParagraphElement>) => {
        e.preventDefault();
        alert('Копіювання заборонено!');
    }

    //########################################################################
    function echo<T>(item: T): T {
        return item
    } 

    echo<string>("Item")
    echo<number>(5)
    echo<boolean>(true)

    interface Box<T> {
        content: T;
    }

   
    
    const Con: Box<number> = {content: 5}

    function getFirstElement<T>  (m: T[])  {
        return m[1] || undefined
    }

    function mergeData<T, U> (inf1: T, inf2: U){
        let sum = []
        sum.push(inf1, inf2)
        console.log(sum);
        return sum
    }

    mergeData({data: 1}, {data: 2})

    interface ApiResponse<T>{
        status: number
        data: T
    }

    interface User {
        id: number
        name: string
    }

    const usersResponse: ApiResponse<User[]> = {
        status: 200,
        data: [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
        ],
    }
    console.log(usersResponse)

    function printLenght<T extends {lenght: number}> (arg: T) {
        console.log(arg.lenght);
        return arg
    }

    printLenght({lenght: 50})
    

    //###############################################################

    const [huk, setHuk] = useState<string[]>([])
    

    return (
        <main className="practice-page">
            <section className="practice-panel" aria-labelledby="practice-title">
                <p className="eyebrow">TypeScript playground</p>
                <h1 id="practice-title">Event practice</h1>
                <p className="intro">Try a few common React form interactions and watch the values in your console.</p>

                <div className="control-grid">
                    <div className="control-group">
                        <label htmlFor="text-input">Text input</label>
                        <input onChange={handleTextChange} type="text" name="text-input" id="text-input" placeholder="Type something..." />
                    </div>

                    <div className="control-group">
                        <label htmlFor="choice">Choose an option</label>
                        <select onChange={handleSelect} name="choice" id="choice" defaultValue="1">
                            <option value="1">Option one</option>
                            <option value="2">Option two</option>
                            <option value="3">Option three</option>
                        </select>
                    </div>

                    <div className="control-group control-group-wide">
                        <label htmlFor="message">Message</label>
                        <textarea onChange={handleChangeArea} name="message" id="message" placeholder="Write a short message..." rows={4}></textarea>
                    </div>
                </div>

                <div className="panel-footer">
                    <button className="secondary-button" onClick={handleClick} type="button">Track click</button>
                    <form className="inline-form" onSubmit={handleSubmit}>
                        <label className="sr-only" htmlFor="form-input">Form value</label>
                        <input id="form-input" type="text" placeholder="Form value" />
                        <button className="primary-button" type="submit">Submit</button>
                    </form>
                </div>

                <div>
                    <label htmlFor="key-input">Press a key</label>
                    <input onChange={handleTextChange} onKeyDown={handleDown} type="text" value={value} name="key-input" id="key-input" placeholder="Press any key..." />
                </div>

                <div>
                    <label htmlFor="focus-input">Focus input</label>
                    <input onFocus={handleFocus} type="text" id="focus-input" placeholder="Click to focus..." />
                </div>

                <div className="control-group control-group-wide">
                    <h2>Custom inputs</h2>
                    <form className="custom-form">
                        <label htmlFor="name">Name</label>
                        <CustomInput name="name" value={formValues.name} placeholder="Your name" onChange={(value) => setFormValues((currentValues) => ({ ...currentValues, name: value }))} />
                        <label htmlFor="email">Email</label>
                        <CustomInput name="email" type="email" value={formValues.email} placeholder="you@example.com" onChange={(value) => setFormValues((currentValues) => ({ ...currentValues, email: value }))} />
                    </form>
                </div>

                <div className="control-group control-group-wide">
                    <h2>One change handler</h2>
                    <form className="custom-form">
                        <label htmlFor="universal-name">Name</label>
                        <input id="universal-name" name="name" value={formValues.name} onChange={handleChange} placeholder="Name" />
                        <label htmlFor="universal-email">Email</label>
                        <input id="universal-email" name="email" type="email" value={formValues.email} onChange={handleChange} placeholder="Email" />
                    </form>
                </div>

                <div className="control-group control-group-wide">
                    <h2>Target and currentTarget</h2>
                    <div className="event-box" onClick={handleDivClick}>
                        <button type="button">Клік</button>
                    </div>
                    <p className="helper-text">target is the element clicked. currentTarget is the div with the handler.</p>
                </div>

                <div className="control-group control-group-wide">
                    <h2>Scroll event</h2>
                    <div className="scroll-box" onScroll={handleScroll}>
                        {Array.from({ length: 8 }, (_, index) => <p key={index}>Scroll item {index + 1}</p>)}
                    </div>
                </div>

                <p className="copy-block" onCopy={handleCopy}>Спробуйте скопіювати цей текст.</p>
                <CustomButton value="Custom button" onClick={() => console.log('Custom button clicked')} />
                            </section>
        </main>
    );
}

export default Task2;