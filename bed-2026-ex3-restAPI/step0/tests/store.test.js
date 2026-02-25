import {writeFileSync} from 'node:fs';
import { join } from 'node:path';

import {getAll, getById, create, updateById, deleteId} from '../store.js';


const dbPath = join(process.cwd(),'db.json');
const restoreDb = () => writeFileSync(dbPath, JSON.stringify([]));
const populateDb =(data) => writeFileSync(dbPath,JSON.stringify(data));
const fixtures = [
    {id: '1', message: 'Hello'},
    {id: '2', message: 'world'}
];
const inventedId = 12345;
const existingId = fixtures[0].id;

describe('store', () => {
    beforeEach(()=> populateDb(fixtures));

    afterAll(() => restoreDb());

    describe('getAll', () => {

        it("Should return an empty array when there's no data", async () => {
            restoreDb();
            const data = await getAll();
            expect(data).toEqual([]);
        });

        it("Should return an array with two items when there are two items", async () => {
            const data = await getAll();
            expect(data).toEqual(fixtures);
        });
    })
});