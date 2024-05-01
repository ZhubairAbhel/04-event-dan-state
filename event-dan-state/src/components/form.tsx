import { rejects } from "assert";
import { resolve } from "path";
import { useState } from "react";

//form 1
export function Form(){
    const [jawaban, setJawaban] = useState('');
    const [error, setError] = useState<Error | null>(null);
    const [status, setStatus] = useState('typing');

    if (status == 'success'){
        return <h1>Jawaban Benar</h1>
    }

    async function handleSubmit(e: {preventDefault: () => void; }) {
        e.preventDefault();
        setStatus('submitting');
        try{
            await submitForm(jawaban);
            setStatus('success');
        } catch (err: any){
            setStatus('typing');
            setError(err as Error)
        }
    }

    function handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>){
        setJawaban(e.target.value); 
    }
    return(
        <>
            <div className="w-full max-w-xs">
                <h2>Tebak Nama Hewan</h2>
                <p>Hewan apa yang ditakuti oleh doraemon?</p>
                <form 
                action="" 
                className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black border-gray-400"
                onSubmit={handleSubmit}>
                    <textarea 
                        value={jawaban}
                        onChange={handleTextareaChange}
                        disabled={status === 'submitting'}
                        />
                        <br/>
                        <button
                            className="bg-blue-400 p-2 m-2 rounded-md text-sm text-white"
                            disabled={jawaban.length === 0 || status === 'submitting'}>
                                Submit
                        </button>
                        {error !== null && <p>{error.message}</p>}
                </form>
            </div>
        </>
    );
}

function submitForm(jawaban: any){
    return new Promise<void>((resolve, reject) =>{
        setTimeout(() =>{
            let shouldError = jawaban.toLowerCase() !== 'tikus'
            if (shouldError){
                reject (new Error('Tebakan yang bagus tetapi jawaban salah. Silahkan coba lagi!'));
            } else {
                resolve();
            }
        }, 500);
    });
}

//form 2
export function Form2(){
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e:any){
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e:any){
        setLastName(e.target.value);
    }
    
    return(
        <>
        <h2>Silahkan isi nama lengkap anda</h2>
        <label className="block w-full m-2">
            nama depan:
            <input className="text-sm text-black ml-2 rounded" 
                value={firstName}
                onChange={handleFirstNameChange} 
                />
        </label>

        <label className="block w-full m-2">
            nama belakang:
            <input className="text-sm text-black ml-2 rounded" 
                value={lastName}
                onChange={handleLastNameChange} 
                />
        </label>
        <p>Nama Lengkap anda adalah : <b>{fullName}</b></p>
        </>
    );
}