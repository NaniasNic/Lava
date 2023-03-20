import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            
            background: string;
            backgroundCard: string;
            text: string;
            subText: string;
            desc: string;
        },
    }
}