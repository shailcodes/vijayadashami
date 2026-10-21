export type FigureName = 'ram-3' | 'ramji2' | 'laxman-2' | 'ravan' | 'left' | 'right';
const descriptions: Record<FigureName,string> = {
 'ram-3':'Lord Ram',
 'ramji2':'Lord Ram',
 'laxman-2':'Lord Laxman',
 'ravan':'Ravan',
 'left': 'Ram',
 'right': 'Laxman'
};

export default function DivineFigure({name,className='',priority=false,decorative=false,depth}:{name:FigureName;className?:string;priority?:boolean;decorative?:boolean;depth?:number}) {
 const size=name==='ravan'?1254:1024;
 return <div className={`rising-figure ${className}`} data-rise-figure data-depth={depth}><img src={`/assets/generated/${name}.png`} alt={decorative?'':descriptions[name]} width={size} height={name==='ravan'?1254:1536} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'} decoding="async"/></div>;
}