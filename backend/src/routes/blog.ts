import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlog, updateBlog } from "@abhivignesh/thoughts-common";

const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    id: string;
  };
}>();

function stripHtmlTags(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}

blog.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = createBlog.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Invalid inputs",
    });
  }

  const posts = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorID: c.get("id"),
    },
  });

  return c.json({
    message: "Post created successfully",
    id: posts.id,
  });
});

blog.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = updateBlog.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Invalid inputs",
    });
  }
  await prisma.post.update({
    where: {
      id: body.id,
      authorID: c.get("id"),
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.json({
    message: "Updated the post",
  });
});

blog.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const allBlogs = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return c.json({
    blogs: allBlogs,
  });
});

blog.get("/myblog", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const userBlogs = await prisma.post.findMany({
    where: {
      authorID: c.get("id"),
    },
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  if (!userBlogs) {
    c.status(403);
    return c.json({
      messge: "No blogs avaliable",
    });
  }
  return c.json({
    userBlogs,
  });
});

blog.get("/search", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const value = c.req.query("value");
  
  try {
    const filteredBlogs = await prisma.post.findMany({
      where: {
        authorID: c.get("id"),
        OR: [
          {
            title: {
              contains: value,
              mode: "insensitive",
            },
          },
          {
            content: {
              contains: value,
              mode: "insensitive",
            },
          },
        ],
      },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    

    return c.json({
      filteredBlogs,
    });
    
  } catch (e) {
    console.error(e);
    return c.status(401);
  }
});

blog.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const id = c.req.param("id");
  if (!id) {
    c.status(411);
    return c.json("Invalid id number");
  }

  const post = await prisma.post.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return c.json({
    post,
  });
});

export default blog;
