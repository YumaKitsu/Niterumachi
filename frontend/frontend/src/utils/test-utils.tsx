import React, {FC, ReactElement, ReactNode} from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ContextProvider } from "../contexts/SearchContext";
import { APIContextProvider } from "../contexts/APIContext";


const AllTheProvider: FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <ContextProvider>
            <APIContextProvider>
                {children}
            </APIContextProvider>
        </ContextProvider>
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProvider, ...options})

export * from '@testing-library/react'
export {customRender as render}