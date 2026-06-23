--
-- PostgreSQL database dump
--

\restrict GXWLg96HOjMQygeAFOVSxi9Gw0OLbQkGzQgADVpZXFmbJhuFsDGY5Ii87zkxYX1

-- Dumped from database version 17.10
-- Dumped by pg_dump version 17.10

-- Started on 2026-06-24 00:55:51

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
-- TOC entry 228 (class 1259 OID 16449)
-- Name: alerts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.alerts (
    alert_id bigint NOT NULL,
    title character varying(150),
    message text,
    alert_type character varying(50),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.alerts OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16448)
-- Name: alerts_alert_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.alerts_alert_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.alerts_alert_id_seq OWNER TO postgres;

--
-- TOC entry 4958 (class 0 OID 0)
-- Dependencies: 227
-- Name: alerts_alert_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.alerts_alert_id_seq OWNED BY public.alerts.alert_id;


--
-- TOC entry 220 (class 1259 OID 16402)
-- Name: disasters; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.disasters (
    disaster_id bigint NOT NULL,
    title character varying(150) NOT NULL,
    description text,
    disaster_type character varying(50),
    location character varying(255),
    severity character varying(20),
    status character varying(30),
    reported_by bigint,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.disasters OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16401)
-- Name: disasters_disaster_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.disasters_disaster_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.disasters_disaster_id_seq OWNER TO postgres;

--
-- TOC entry 4959 (class 0 OID 0)
-- Dependencies: 219
-- Name: disasters_disaster_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.disasters_disaster_id_seq OWNED BY public.disasters.disaster_id;


--
-- TOC entry 226 (class 1259 OID 16436)
-- Name: rescue_tasks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rescue_tasks (
    task_id bigint NOT NULL,
    disaster_id bigint,
    assigned_team character varying(100),
    priority character varying(20),
    status character varying(30),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.rescue_tasks OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16435)
-- Name: rescue_tasks_task_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rescue_tasks_task_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.rescue_tasks_task_id_seq OWNER TO postgres;

--
-- TOC entry 4960 (class 0 OID 0)
-- Dependencies: 225
-- Name: rescue_tasks_task_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rescue_tasks_task_id_seq OWNED BY public.rescue_tasks.task_id;


--
-- TOC entry 222 (class 1259 OID 16417)
-- Name: resources; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.resources (
    resource_id bigint NOT NULL,
    resource_name character varying(100) NOT NULL,
    quantity integer NOT NULL,
    location character varying(255),
    status character varying(30),
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.resources OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16416)
-- Name: resources_resource_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.resources_resource_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.resources_resource_id_seq OWNER TO postgres;

--
-- TOC entry 4961 (class 0 OID 0)
-- Dependencies: 221
-- Name: resources_resource_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.resources_resource_id_seq OWNED BY public.resources.resource_id;


--
-- TOC entry 218 (class 1259 OID 16390)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id bigint NOT NULL,
    full_name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    phone character varying(255),
    role character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16389)
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_user_id_seq OWNER TO postgres;

--
-- TOC entry 4962 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- TOC entry 224 (class 1259 OID 16425)
-- Name: volunteers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.volunteers (
    volunteer_id bigint NOT NULL,
    full_name character varying(100),
    email character varying(100),
    phone character varying(20),
    skills text,
    availability character varying(50)
);


ALTER TABLE public.volunteers OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16424)
-- Name: volunteers_volunteer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.volunteers_volunteer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.volunteers_volunteer_id_seq OWNER TO postgres;

--
-- TOC entry 4963 (class 0 OID 0)
-- Dependencies: 223
-- Name: volunteers_volunteer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.volunteers_volunteer_id_seq OWNED BY public.volunteers.volunteer_id;


--
-- TOC entry 4776 (class 2604 OID 16452)
-- Name: alerts alert_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alerts ALTER COLUMN alert_id SET DEFAULT nextval('public.alerts_alert_id_seq'::regclass);


--
-- TOC entry 4769 (class 2604 OID 16405)
-- Name: disasters disaster_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disasters ALTER COLUMN disaster_id SET DEFAULT nextval('public.disasters_disaster_id_seq'::regclass);


--
-- TOC entry 4774 (class 2604 OID 16439)
-- Name: rescue_tasks task_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rescue_tasks ALTER COLUMN task_id SET DEFAULT nextval('public.rescue_tasks_task_id_seq'::regclass);


--
-- TOC entry 4771 (class 2604 OID 16420)
-- Name: resources resource_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resources ALTER COLUMN resource_id SET DEFAULT nextval('public.resources_resource_id_seq'::regclass);


--
-- TOC entry 4767 (class 2604 OID 16393)
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- TOC entry 4773 (class 2604 OID 16428)
-- Name: volunteers volunteer_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.volunteers ALTER COLUMN volunteer_id SET DEFAULT nextval('public.volunteers_volunteer_id_seq'::regclass);


--
-- TOC entry 4952 (class 0 OID 16449)
-- Dependencies: 228
-- Data for Name: alerts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.alerts (alert_id, title, message, alert_type, created_at) FROM stdin;
\.


--
-- TOC entry 4944 (class 0 OID 16402)
-- Dependencies: 220
-- Data for Name: disasters; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.disasters (disaster_id, title, description, disaster_type, location, severity, status, reported_by, created_at) FROM stdin;
\.


--
-- TOC entry 4950 (class 0 OID 16436)
-- Dependencies: 226
-- Data for Name: rescue_tasks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rescue_tasks (task_id, disaster_id, assigned_team, priority, status, created_at) FROM stdin;
\.


--
-- TOC entry 4946 (class 0 OID 16417)
-- Dependencies: 222
-- Data for Name: resources; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.resources (resource_id, resource_name, quantity, location, status, updated_at) FROM stdin;
\.


--
-- TOC entry 4942 (class 0 OID 16390)
-- Dependencies: 218
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, full_name, email, password, phone, role, created_at) FROM stdin;
\.


--
-- TOC entry 4948 (class 0 OID 16425)
-- Dependencies: 224
-- Data for Name: volunteers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.volunteers (volunteer_id, full_name, email, phone, skills, availability) FROM stdin;
\.


--
-- TOC entry 4964 (class 0 OID 0)
-- Dependencies: 227
-- Name: alerts_alert_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.alerts_alert_id_seq', 1, false);


--
-- TOC entry 4965 (class 0 OID 0)
-- Dependencies: 219
-- Name: disasters_disaster_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.disasters_disaster_id_seq', 1, false);


--
-- TOC entry 4966 (class 0 OID 0)
-- Dependencies: 225
-- Name: rescue_tasks_task_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rescue_tasks_task_id_seq', 1, false);


--
-- TOC entry 4967 (class 0 OID 0)
-- Dependencies: 221
-- Name: resources_resource_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.resources_resource_id_seq', 1, false);


--
-- TOC entry 4968 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_user_id_seq', 1, true);


--
-- TOC entry 4969 (class 0 OID 0)
-- Dependencies: 223
-- Name: volunteers_volunteer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.volunteers_volunteer_id_seq', 1, false);


--
-- TOC entry 4793 (class 2606 OID 16457)
-- Name: alerts alerts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alerts
    ADD CONSTRAINT alerts_pkey PRIMARY KEY (alert_id);


--
-- TOC entry 4783 (class 2606 OID 16410)
-- Name: disasters disasters_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disasters
    ADD CONSTRAINT disasters_pkey PRIMARY KEY (disaster_id);


--
-- TOC entry 4791 (class 2606 OID 16442)
-- Name: rescue_tasks rescue_tasks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rescue_tasks
    ADD CONSTRAINT rescue_tasks_pkey PRIMARY KEY (task_id);


--
-- TOC entry 4785 (class 2606 OID 16423)
-- Name: resources resources_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resources
    ADD CONSTRAINT resources_pkey PRIMARY KEY (resource_id);


--
-- TOC entry 4779 (class 2606 OID 16459)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 4781 (class 2606 OID 16398)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- TOC entry 4787 (class 2606 OID 16434)
-- Name: volunteers volunteers_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.volunteers
    ADD CONSTRAINT volunteers_email_key UNIQUE (email);


--
-- TOC entry 4789 (class 2606 OID 16432)
-- Name: volunteers volunteers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.volunteers
    ADD CONSTRAINT volunteers_pkey PRIMARY KEY (volunteer_id);


--
-- TOC entry 4794 (class 2606 OID 16411)
-- Name: disasters fk_disaster_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disasters
    ADD CONSTRAINT fk_disaster_user FOREIGN KEY (reported_by) REFERENCES public.users(user_id);


--
-- TOC entry 4795 (class 2606 OID 16443)
-- Name: rescue_tasks fk_task_disaster; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rescue_tasks
    ADD CONSTRAINT fk_task_disaster FOREIGN KEY (disaster_id) REFERENCES public.disasters(disaster_id);


-- Completed on 2026-06-24 00:55:52

--
-- PostgreSQL database dump complete
--

\unrestrict GXWLg96HOjMQygeAFOVSxi9Gw0OLbQkGzQgADVpZXFmbJhuFsDGY5Ii87zkxYX1

