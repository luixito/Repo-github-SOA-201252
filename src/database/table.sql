CREATE TABLE IF NOT EXISTS public.tareas
(
    id uuid NOT NULL,
    title character varying COLLATE pg_catalog."default" NOT NULL,
    des character varying COLLATE pg_catalog."default" NOT NULL,
    status boolean NOT NULL DEFAULT false,
    CONSTRAINT tareas_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tareas
    OWNER to postgres;