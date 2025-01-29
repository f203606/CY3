import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import requester from "../axios";

export function MemberForm(props) {

    const [member, setMember] = useState();
    const [guilds, setGuilds] = useState([]);
    
    const { memberId } = useParams();

    const addMember = async ({ name, guildId }) => {
        const created = {
            name,
            guildId,
        };

        try {
            const response = await requester.post("/members", created);
            setMember(response?.data);
            props.updateMembers?.(response?.data)
        } catch(error) {
            console.log("Erro ao adicionar membro:", error);
        }
    };

    useEffect(() => {
        const getGuilds = async () => {
            try {
                const response = await requester.get("/guilds");
                setGuilds(response.data);
            } catch(error) {
                console.log("Erro ao buscar as guildas", error);
            }
        };
        getGuilds();
    }, []);
    
    const onSubmit = (e) => {
        e.preventDefault();
        addMember(member);
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4 text-orange-500">
            
            <div className="flex flex-col gap-1">
                <label>Membro</label>
                <input
                    role="input"
                    name="name"
                    type="text"
                    defaultValue={member?.name}
                    onChange={(e) => 
                        setMember((prev) => ({...prev, name: e.target.value}))
                    } />
            </div>

            <div className="flex flex-col gap-1">
                <label>Guilda</label>
                <select 
                    role="select"
                    value={member?.guildId ?? 0}
                    name="guild"
                    placeholder="Guilda"
                    onChange={(e) => 
                        setMember((prev) => ({...prev, guildId: e.target.value}))
                    }
                >
                    <option value="" />
                    {guilds.map((guild) => (
                        <option key={guild.id} value={guild.id}
                    >
                        {guild.name}                                
                    </option>
                    ))}
                </select>

            </div>
            <button type="submit" className="w-fit">Confirmar</button>
            
        </form>
    )
}