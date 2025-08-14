'use server';

import { randomUUID } from "crypto";
import { connectionPool } from "./db";

export async function saveInboxNote(formData: FormData) {
    const id = randomUUID() as string;
    const noteText = formData.get('new-note') as string;

    await connectionPool.query('INSERT INTO inbox_notes (id, content) VALUES ($1, $2);', [id, noteText]);
}
