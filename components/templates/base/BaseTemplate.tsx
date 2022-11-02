import styles from './ComponentTemplate.module.css'

export interface IBaseTemplateProps {
    exampleProp: string
}

const BaseTemplate: React.FC<IBaseTemplateProps> = (props: IBaseTemplateProps) => {
    return <div className='{styles.container}'>Base component template: {props.exampleProp}</div>
}

export default BaseTemplate;
