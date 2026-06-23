--
-- PostgreSQL database dump
--

\restrict 3lprhzSxCZ3bQX1FKxmqOXfBsnXfW5g9rXbHqmaa0zhxAr6xNC9P2moBObpZJQF

-- Dumped from database version 17.10
-- Dumped by pg_dump version 17.10

-- Started on 2026-06-24 00:57:12

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
-- TOC entry 218 (class 1259 OID 16478)
-- Name: incidents; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.incidents (
    id bigint NOT NULL,
    description character varying(255),
    disaster_type character varying(255),
    location character varying(255),
    severity character varying(255),
    status character varying(255),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.incidents OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16477)
-- Name: incidents_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.incidents_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.incidents_id_seq OWNER TO postgres;

--
-- TOC entry 4898 (class 0 OID 0)
-- Dependencies: 217
-- Name: incidents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.incidents_id_seq OWNED BY public.incidents.id;


--
-- TOC entry 4742 (class 2604 OID 16481)
-- Name: incidents id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidents ALTER COLUMN id SET DEFAULT nextval('public.incidents_id_seq'::regclass);


--
-- TOC entry 4892 (class 0 OID 16478)
-- Dependencies: 218
-- Data for Name: incidents; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.incidents (id, description, disaster_type, location, severity, status, created_at) FROM stdin;
1	Heavy flooding reported in Colombo area	Flood	Colombo	High	Pending	2026-06-22 20:10:06.143639
2	Bulding near Dalugama Town	Fire	Dalugama	Medium	Pending	2026-06-24 00:02:49.918959
\.


--
-- TOC entry 4899 (class 0 OID 0)
-- Dependencies: 217
-- Name: incidents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.incidents_id_seq', 2, true);


--
-- TOC entry 4745 (class 2606 OID 16486)
-- Name: incidents incidents_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidents
    ADD CONSTRAINT incidents_pkey PRIMARY KEY (id);


-- Completed on 2026-06-24 00:57:13

--
-- PostgreSQL database dump complete
--

\unrestrict 3lprhzSxCZ3bQX1FKxmqOXfBsnXfW5g9rXbHqmaa0zhxAr6xNC9P2moBObpZJQF

