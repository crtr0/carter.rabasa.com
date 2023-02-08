import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		type: z.string().optional(),
		// Transform string to Date object
		tags: z.array(z.string()).optional(),
		published: z.boolean().optional(),
		pubDate: z
			.string()
			.optional()
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };
