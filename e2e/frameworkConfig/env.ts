export class ENV {
    public static readonly BASE_URL = process.env.URL;
    public static readonly USERNAME = process.env.USERNAME ?? "Admin12";
    public static readonly PASSWORD = process.env.PASSWORD ?? "admin1234";
}