
import {getConnection} from "../database/database";


const getLanguages = async (request,response)=>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id,name,programmers FROM language");
        response.json(result)
    }catch(error){
        response.status(500);
        response.send(error.message);
    }

}

const addLanguage = async (request,response)=>{
    try{
        const { id, name, programmers } = request.body;

        if( id === undefined || name === undefined || programmers === undefined){
            response.status(400).json( {message : "Bad request my brother, please fill all field"});
        }
        const language ={id,name,programmers};
        const connection = await getConnection();
        await connection.query("INSERT INTO language SET ?",language);
        response.json({message : "Language added"});
    }catch(error){
        response.send(error.message);
    }
}

const getLanguageById = async (request,response)=>{
    const id = request.params.id;
    console.log("adas")
    console.log(id);
    if( id === undefined){
        response.status(400).json( {message : "Bad request my brother, please fill all field"});
    }
    const connection = await getConnection();
    const result = await connection.query(`SELECT * FROM language WHERE id = ${id}`);
    response.json(result);
}
const deleteLanguage = async (request,response)=>{
    const id = request.params.id;
    if( id === undefined){
        response.status(400).json( {message : "Bad request my brother, please fill all field"});
    }
    const connection = await getConnection();
    const result = await connection.query(`DELETE FROM language WHERE id = ${id}`);
    response.json(result);
}
const updateLanguage = async (request,response) =>{
    const {id} = request.params;
    const {name,programmers} = request.body;
    console.log(id,name,programmers);
    if( id === undefined || name === undefined || programmers === undefined){
        response.status(400).json( {message : "Bad request my brother, please fill all field"});
    }
    const language = {name,programmers};
    const connection = await getConnection();
    const result = await connection.query("UPDATE language SET ? WHERE id = ?", [language, id]);
    response.json(result);
}
export const methods = {
    getLanguages,
    addLanguage,
    getLanguageById,
    deleteLanguage,
    updateLanguage
}