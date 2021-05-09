declare module 'venox' {
  export default function venox(): {
    modules: any[];
    constructors: any[];
    get: (id: string) => any;
    searchModule: (query: string) => any;
  };
}
