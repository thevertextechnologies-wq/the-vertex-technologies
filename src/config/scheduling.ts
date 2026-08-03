/** Calendly event — 30 min strategy call */
export const CALENDLY_BOOKING_URL = "https://calendly.com/thevertextechnologies/30min";

/** Hex colors for Calendly iframe/widget (no # prefix) — aligned with site ink + cream */
const CALENDLY_THEME = {
  primary: "da4838",
  background: "14141c",
  text: "ececea",
} as const;

/** Branded query params — see https://help.calendly.com/hc/en-us/articles/360019969833 */
export function getCalendlyEmbedUrl(): string {
  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    hide_event_type_details: "1",
    primary_color: CALENDLY_THEME.primary,
    background_color: CALENDLY_THEME.background,
    text_color: CALENDLY_THEME.text,
  });
  return `${CALENDLY_BOOKING_URL}?${params.toString()}`;
}
