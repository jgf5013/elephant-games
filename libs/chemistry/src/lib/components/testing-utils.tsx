import { render } from '@testing-library/react';
import { AppContext } from '@elephant-games/game';

export function customRender(ui, { providerProps, ...renderOptions }) {
    return render(
        <AppContext.Provider {...providerProps}>{ui}</AppContext.Provider>,
        renderOptions
    );
}

export function getRandomElement(list: any[]) {
    return list[Math.floor(Math.random() * list.length)];
}