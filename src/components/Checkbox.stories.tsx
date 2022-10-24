import { Checkbox } from "./Checkbox";
import { Text } from "./Text";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
    decorators: [
        (Story) => {
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">Lembrar-me de mim por 30 dias</Text>
                </div>
                
            )
        }
    ]
}

export const Default = {}