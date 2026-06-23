--
-- PostgreSQL database dump
--

\restrict Z15WjkTaVP6VjKQeILLhWyIv5u2gqpVxj3LPvGBpGXnckQIjlL4rgo5MoJ9kuO2

-- Dumped from database version 17.10
-- Dumped by pg_dump version 17.10

-- Started on 2026-06-24 00:55:17

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
-- TOC entry 218 (class 1259 OID 16495)
-- Name: shelters; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shelters (
    id bigint NOT NULL,
    shelter_name character varying(255),
    capacity integer,
    occupied_count integer,
    location character varying(255),
    status character varying(255)
);


ALTER TABLE public.shelters OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16494)
-- Name: shelters_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.shelters_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.shelters_id_seq OWNER TO postgres;

--
-- TOC entry 4897 (class 0 OID 0)
-- Dependencies: 217
-- Name: shelters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.shelters_id_seq OWNED BY public.shelters.id;


--
-- TOC entry 4742 (class 2604 OID 16498)
-- Name: shelters id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shelters ALTER COLUMN id SET DEFAULT nextval('public.shelters_id_seq'::regclass);


--
-- TOC entry 4891 (class 0 OID 16495)
-- Dependencies: 218
-- Data for Name: shelters; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.shelters (id, shelter_name, capacity, occupied_count, location, status) FROM stdin;
2	Colombo Community Hall	500	180	Colombo	ACTIVE
3	Kandy Relief Center	300	120	Kandy	ACTIVE
\.


--
-- TOC entry 4898 (class 0 OID 0)
-- Dependencies: 217
-- Name: shelters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.shelters_id_seq', 3, true);


--
-- TOC entry 4744 (class 2606 OID 16500)
-- Name: shelters shelters_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shelters
    ADD CONSTRAINT shelters_pkey PRIMARY KEY (id);


-- Completed on 2026-06-24 00:55:17

--
-- PostgreSQL database dump complete
--

\unrestrict Z15WjkTaVP6VjKQeILLhWyIv5u2gqpVxj3LPvGBpGXnckQIjlL4rgo5MoJ9kuO2

