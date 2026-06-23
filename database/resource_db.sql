--
-- PostgreSQL database dump
--

\restrict Ino8DmQfIu7DgaYyzwtV3EXx1ApC10YlAzSssLS1r8suiSwoJ1Wf8dCZkfp8dLD

-- Dumped from database version 17.10
-- Dumped by pg_dump version 17.10

-- Started on 2026-06-24 00:56:21

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 16488)
-- Name: resources; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.resources (
    id bigint NOT NULL,
    resource_name character varying(255),
    quantity integer,
    location character varying(255),
    availability character varying(255)
);


ALTER TABLE public.resources OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16487)
-- Name: resources_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.resources_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.resources_id_seq OWNER TO postgres;

--
-- TOC entry 4897 (class 0 OID 0)
-- Dependencies: 217
-- Name: resources_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.resources_id_seq OWNED BY public.resources.id;


--
-- TOC entry 4742 (class 2604 OID 16491)
-- Name: resources id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resources ALTER COLUMN id SET DEFAULT nextval('public.resources_id_seq'::regclass);


--
-- TOC entry 4891 (class 0 OID 16488)
-- Dependencies: 218
-- Data for Name: resources; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.resources (id, resource_name, quantity, location, availability) FROM stdin;
2	Food Packages	1500	Colombo	AVAILABLE
3	Medical Supplies	850	Kandy	AVAILABLE
4	Drinking Water	2500	Galle	LIMITED
\.


--
-- TOC entry 4898 (class 0 OID 0)
-- Dependencies: 217
-- Name: resources_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.resources_id_seq', 4, true);


--
-- TOC entry 4744 (class 2606 OID 16493)
-- Name: resources resources_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resources
    ADD CONSTRAINT resources_pkey PRIMARY KEY (id);


-- Completed on 2026-06-24 00:56:21

--
-- PostgreSQL database dump complete
--

\unrestrict Ino8DmQfIu7DgaYyzwtV3EXx1ApC10YlAzSssLS1r8suiSwoJ1Wf8dCZkfp8dLD

