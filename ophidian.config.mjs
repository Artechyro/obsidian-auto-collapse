import Builder from "@ophidian/build";

new Builder("src/main.ts")
    .withSass()
    .withInstall()
    .build();