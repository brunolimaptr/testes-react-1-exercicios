import { render, screen } from "@testing-library/react"
import  userEvent  from "@testing-library/user-event"
import Calculator from "../components/Calculator"

describe("Calculator",()=>{
    test("deve renderizar corretamente com os dígitos de operações +, -, *, e /.", async ()=>{
        render(<Calculator/>)

        const value = screen.getByText("+","-","*","/")

        expect(value).toBeInTheDocument()
    })

    test("Garanta em pelo menos dois testes que a multiplicação está funcionando corretamente", async ()=>{
        const user = userEvent.setup()
        render(<Calculator/>)
        screen.debug()

        const five = screen.getByText("5")

        await user.click(five)

        const multi = screen.getByText("*")

        await user.click(multi)

        const two = screen.getByText("2")

        await user.click(two)

        const equal = screen.getByText("=")

        await user.click(equal)

        const result = await screen.getByText("10")
        expect(result).toBeInTheDocument()
    })


        test("Garanta em pelo menos dois testes que a multiplicação está funcionando corretamente", async ()=>{
        const user = userEvent.setup()
        render(<Calculator/>)
        screen.debug()

        const five = screen.getByText("5")

        await user.click(five)

        const multi = screen.getByText("*")

        await user.click(multi)

        const two = screen.getByText("2")

        await user.click(two)

        const soma = screen.getByText("+")

        await user.click(soma)

        await user.click(five)

        await user.click(soma)
        
        await user.click(five)

        const equal = screen.getByText("=")

        await user.click(equal)

        const result = await screen.getByText("20")
        expect(result).toBeInTheDocument()
    })
})