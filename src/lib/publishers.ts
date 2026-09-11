/**
 * Data-access helpers for publisher records.
 *
 * These helpers accept an injectable database client so they can be reused by
 * build-time pages and tested against an in-memory database.
 */

import { asc } from 'drizzle-orm';
import type { Database } from './db';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';

/**
 * Fetches all publishers in alphabetical order by name.
 *
 * @param db Database client used to query publisher records.
 * @returns Publisher summaries ordered by name.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
