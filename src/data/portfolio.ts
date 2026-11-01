// Carga y tipa el contenido de portfolio.yaml. Para cambiar textos, edita
// el YAML: este módulo solo le pone forma.
import data from "./portfolio.yaml";

export interface Handle {
	handle: string;
	display: string;
	href: string;
}

export interface Profile {
	name: string;
	kicker: string;
	location: string;
	email: string;
	phone: { display: string; href: string };
	github: Handle;
	linkedin: Handle;
	availability: string;
	cv: string;
}

export interface NavItem {
	label: string;
	href: string;
	accent?: boolean;
}

export interface Stat {
	value: string;
	label: string;
}

export interface Project {
	number: string;
	title: string;
	summary: string;
	stack: string;
	role: string;
	year: string;
	href?: string;
}

export interface RecordItem {
	title: string;
	meta: string;
}

export interface StackRow {
	label: string;
	value: string;
	filled?: boolean;
}

export interface Certificate {
	name: string;
	issuer: string;
	year: string;
	href?: string;
}

export interface Context {
	id: string;
	label: string;
	title: string[];
	lead: string;
	stats: Stat[];
	projects: Project[];
	experience: RecordItem[];
	education: RecordItem[];
	stack: StackRow[];
	certificates: Certificate[];
}

interface Portfolio {
	profile: Profile;
	nav: NavItem[];
	switch: { label: string; default: string };
	contexts: Context[];
}

const portfolio = data as Portfolio;

export const profile = portfolio.profile;
export const nav = portfolio.nav;
export const contexts = portfolio.contexts;
export const switchLabel = portfolio.switch.label;

if (contexts.length === 0) {
	throw new Error("portfolio.yaml: hace falta al menos un contexto en `contexts`.");
}

export const contextIds = contexts.map((context) => context.id);

const requested = portfolio.switch.default;
if (requested && !contextIds.includes(requested)) {
	throw new Error(
		`portfolio.yaml: switch.default es "${requested}", que no coincide con ningún contexto (${contextIds.join(", ")}).`,
	);
}

/** Contexto que se muestra al abrir la página, antes de mirar localStorage. */
export const defaultContext = requested ?? contextIds[0];
