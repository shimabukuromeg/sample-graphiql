import { createGraphiQLFetcher } from '@graphiql/toolkit';
import {
  GraphiQLPlugin,
  ToolbarButton
} from '@graphiql/react';
import { GraphiQL } from 'graphiql';
import { ExplorerPlugin } from './graphiql-plugin/explorer/ExplorerPlugin';
import { QueryContext } from './graphiql-plugin/explorer/QueryContext';

import 'graphiql/graphiql.css';
import {
  useMemo,
  useState,
} from 'react';

const explorerPlugin: GraphiQLPlugin = {
  title: 'GraphiQL Explorer',
  icon: () => (
    <svg height="1em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 6H20M22 6H20M20 6V4M20 6V8"
        stroke="current Color"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.4 20H2.6C2.26863 20 2 19.7314 2 19.4V11H21.4C21.7314 11 22 11.2686 22 11.6V19.4C22 19.7314 21.7314 20 21.4 20Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 11V4.6C2 4.26863 2.26863 4 2.6 4H8.77805C8.92127 4 9.05977 4.05124 9.16852 4.14445L12.3315 6.85555C12.4402 6.94876 12.5787 7 12.722 7H14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  content: () => <ExplorerPlugin />,
};


const explorerPluginExample: GraphiQLPlugin = {
  title: 'GraphiQL Explorer Example',
  icon: () => (
    <svg height="1em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 6H20M22 6H20M20 6V4M20 6V8"
        stroke="current Color"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.4 20H2.6C2.26863 20 2 19.7314 2 19.4V11H21.4C21.7314 11 22 11.2686 22 11.6V19.4C22 19.7314 21.7314 20 21.4 20Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 11V4.6C2 4.26863 2.26863 4 2.6 4H8.77805C8.92127 4 9.05977 4.05124 9.16852 4.14445L12.3315 6.85555C12.4402 6.94876 12.5787 7 12.722 7H14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  content: () => <div>hello</div>,
};

const fetcher = createGraphiQLFetcher({
  url: 'https://crgjbrzjrswahihtklim.supabase.co/graphql/v1',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    apikey: import.meta.env.VITE_API_KEY
  },
});

function GraphiQLApp() {
  const [query, setQuery] = useState<string>('');

  return (
    <QueryContext.Provider
      value={useMemo(() => ({ query, setQuery }), [query])}
    >
      <GraphiQL
        fetcher={fetcher}
        query={query}
        onEditQuery={newQuery => setQuery(newQuery)}
        plugins={[explorerPlugin, explorerPluginExample]}
      >
        <GraphiQL.Logo>サンプル GraphiQL</GraphiQL.Logo>
        <GraphiQL.Toolbar>
          {/* Add custom styles for your buttons using the given class */}
          <div className="button-group">
            <ToolbarButton
              label="ボタンA"
              onClick={() => window.alert('こんにちは！')}
              style={{ backgroundColor: "red", color: "white", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", marginBottom: "10px" }}
            >A</ToolbarButton>
            <ToolbarButton
              label="ボタンB"
              onClick={() => window.alert('さようなら！')}
              style={{ backgroundColor: "blue", color: "white", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", marginBottom: "10px" }}
            >B</ToolbarButton>
          </div>
        </GraphiQL.Toolbar>
      </GraphiQL>
    </QueryContext.Provider>
  );
}

export default GraphiQLApp;
