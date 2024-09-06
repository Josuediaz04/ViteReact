// src/components/PostresList.tsx
import React, { useEffect, useState } from 'react';
import {Postre} from '../interface/Postres/PostresInterface';
import {  fetchPostres } from '../services/PostresServices/Postres';

const PostresList: React.FC = () => {
    const [postres, setPostres] = useState<Postre[]>([]);



    useEffect(() => {
        const getPostres = async () => {
            try {
                const data = await fetchPostres();
                setPostres(data);
            } catch (error) {
                console.error("Error fetching postres:", error);
            }
        };

        getPostres();
    }, []);
    return (
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Lista de Postres</h1>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="px-8 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">stok</th>
                    </tr>
                </thead>
                <tbody>
                    {postres.map((postre) => (
                        <tr key={postre.id}>
                            <td className="px-6 py-4 border-b border-gray-200">{postre.nombre}</td>
                            <td className="px-6 py-4 border-b border-gray-200">{postre.precio}</td>
                            <td className= "px-6 py-4 border-b border-gray-200">{postre.stok}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);      

};

export default PostresList;
