export class GracefulNPCSheet extends dnd5e.applications.actor.ActorSheet5eCharacter {
    get template() {
        if (!game.user.isGM && this.actor.limited && !game.settings.get(CONSTANTS.MODULE_ID, "expandedSheetEnabled"))
            return "modules/gracefulnpcsheet/templates/a.hbs";
        return "modules/gracefulnpcsheet/templates/b.hbs";
    }
}

Hooks.once("init", async () => {
    Actors.registerSheet("dnd5e", GracefulNPCSheet, {
        types: ["character"],
        makeDefault: false
    });
});