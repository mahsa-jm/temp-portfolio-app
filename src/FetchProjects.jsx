import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
    space:'86ym75ia5ib1',
    environment:'master',
    accessToken: import.meta.env.VITE_API_KEY,
});



export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async() => {
        try{
            const response = await client.getEntries({ content_type : 'myprojects' });
            const projects = response.items.map((item) => {
                const { title, url, image, githuburl, text } = item.fields;
                const id = item.sys.id;
                const img = image?.fields?.file?.url;
                return {title,url,id,img, githuburl,text}
            })
            setProjects(projects)
            setLoading(false);
        }  catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        getData()
    },[])
    
    return {loading, projects}
};


