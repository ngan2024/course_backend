import fs from 'node:fs/promises';
import path from 'node:path';

const filename = path.join(process.cwd(), 'db.json');

const saveChanges = async (data) => {
    await fs.writeFile(filename, JSON.stringify(data));
};

const readData = async () => {
    const data = await fs.readFile(filename, 'utf-8');
    return JSON.parse(data);
};

const getAll = readData;

const getById = async (id) => {
    const data = await readData();
    return data.find(item => item.id === id);
};

const create = async (item) => {
    const data = await readData();
    const newItem = { id: Date.now().toString(), ...item };
    data.push(newItem);
    await saveChanges(data);
    return newItem;
};

const updateById = async (id, message) => {
    const data = await readData();
    const newData = data.map(current => current.id === id ? 
        { ...current, message } : current);
    await saveChanges(newData);
};

const deleteById = async (id) => {
    const data = await readData();
    const newData = data.filter(item => item.id !== id);
    await saveChanges(newData);
};

export  {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};