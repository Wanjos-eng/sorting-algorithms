# Algoritmos de Ordenação

Este projeto implementa e compara diversos algoritmos de ordenação, fornecendo métricas detalhadas como o número de comparações, trocas e o tempo de execução para diferentes casos de entrada (aleatório, ordenado e inversamente ordenado). Os resultados são visualizados em gráficos gerados em um arquivo HTML.

## Funcionalidades

- **Algoritmos Implementados**:
  - Selection Sort
  - Bubble Sort
  - Insertion Sort
  - Quick Sort
  - Heap Sort
  - Merge Sort
- **Métricas**:
  - Número de comparações
  - Número de trocas
  - Tempo de execução
- **Casos de Entrada**:
  - Arrays aleatórios
  - Arrays ordenados
  - Arrays inversamente ordenados
- **Visualização**:
  - Geração de um arquivo HTML com gráficos comparativos do desempenho dos algoritmos.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (vem junto com o Node.js)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Wanjos-eng/sorting-algorithms.git
   cd sorting-algorithms
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Como Usar

1. Execute o projeto:
   ```bash
   npm start
   ```

2. Após a execução, os seguintes arquivos serão gerados:
   - `resultados.csv`: Um arquivo CSV contendo métricas detalhadas para todos os algoritmos.
   - `resultados.html`: Um arquivo HTML com gráficos visualizando o desempenho dos algoritmos.

3. Abra o arquivo `resultados.html` no navegador para visualizar os gráficos.

## Estrutura do Projeto

```
sorting-algorithms/
├── src/
│   ├── algorithms/          # Implementações dos algoritmos de ordenação
│   │   ├── bubbleSort.ts
│   │   ├── selectionSort.ts
│   │   ├── insertionSort.ts
│   │   ├── quickSort.ts
│   │   ├── heapSort.ts
│   │   ├── mergeSort.ts
│   ├── utils/               # Funções utilitárias
│   │   ├── arrayUtils.ts
│   ├── types/               # Definições de tipos
│   │   ├── types.ts
│   ├── results/             # Funções para geração de resultados
│   │   ├── resultsUtils.ts
│   ├── config/              # Arquivos de configuração
│   │   ├── config.ts
│   ├── charts.ts            # Lógica para geração de gráficos
│   ├── index.ts             # Ponto de entrada principal
├── .gitignore               # Arquivo para ignorar arquivos no Git
├── tsconfig.json            # Configuração do TypeScript
├── package.json             # Configuração do npm
├── README.md                # Documentação do projeto
```

## Configuração

Você pode configurar os tamanhos de entrada e os incrementos no arquivo `src/config/config.ts`:
```typescript
export const tamanhoInicial = 10;  // Tamanho inicial do array
export const tamanhoFinal = 1000; // Tamanho final do array
export const incremento = 10;     // Incremento do tamanho
```

## Dependências

O projeto utiliza as seguintes dependências:

- [Chart.js](https://www.chartjs.org/) - Para geração de gráficos no arquivo HTML.
- [TypeScript](https://www.typescriptlang.org/) - Para segurança de tipos e recursos modernos do JavaScript.

## Desenvolvimento

Para executar o projeto em modo de desenvolvimento com TypeScript:
```bash
npx ts-node src/index.ts
```

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou novas funcionalidades, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Agradecimentos

- [Chart.js](https://www.chartjs.org/) pela biblioteca de gráficos.
- [Node.js](https://nodejs.org/) pelo ambiente de execução.
- [TypeScript](https://www.typescriptlang.org/) pela experiência de desenvolvimento com segurança de tipos.