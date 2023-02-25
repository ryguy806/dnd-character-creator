import { NextPage } from "next"
import { FormEvent, useState } from "react"
import {useForm} from 'react-hook-form'
import Loading from "../components/Loading";

const Creator: NextPage = () => {

    const {register, handleSubmit, formState: {isSubmitting}} = useForm();

    const saveFormData = async (data: object) => {
        return await fetch("/api/form", {
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"},
            method: "POST"
        })
    }

    return (
        <>
            <h1>This is the creator page! We make characters here.</h1>
            <div style={{display: 'flex', flexDirection: "row",}}>
                <form onSubmit={handleSubmit(saveFormData)} id="character_form">
                    <label htmlFor="character_name">Name:</label>
                    <input type="text" {...register("character_name", {required: true})}/>
                    <button type="submit" disabled={isSubmitting}>{isSubmitting ? <Loading/> : "Create Character"}</button>
                </form>
            </div>
        </>
    )
}

export default Creator;