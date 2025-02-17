import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		publishedDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
    heroImage: z.object({
      url: z.string().optional(),
      alt: z.string().optional(),
    }),
    tags: z.array(z.string()),
    isFeatured: z.boolean()
	}),
});

const links = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		publishedDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
    heroImage: z.object({
      url: z.string().optional(),
      alt: z.string().optional(),
    }),
    tags: z.array(z.string()),
    isFeatured: z.boolean(),
    affiliateLink: z.string(),
    productCode: z.string()
	}),
});

export const collections = { blog, links };
