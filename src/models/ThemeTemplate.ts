export class ThemeTemplate {

    constructor(
        public name: string,
        public primaryPalette: ThemePalette,
        public accentPalette: ThemePalette,
        public warnPalette: ThemePalette,
        public dark?: boolean
    ) {
        if (dark == undefined) {
            dark = false
        }
    }
}

class ThemePalette {
    constructor(public name: string, public colors: ThemeColor[]) { }
}

class ThemeColor {

    public darkContrast: boolean

    constructor(
        public name: string,
        public hex: string,
        darkConstrast?: boolean) {
        this.darkContrast = darkConstrast
    }
}