export default function Neovim() {
  return (
    <main>
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          My Neovim Configuration
        </h1>
        <p className="mb-6">
          Neovim is a powerful, modern text editor that builds upon the legacy
          of Vim while adding new features and improvements. It’s designed to be
          more extensible and easier to integrate with modern development tools,
          making it a great choice for developers who want more flexibility in
          their coding environment.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Neovim vs Vim</h2>
        <p className="mb-6">
          While Neovim and Vim share the same foundation, Neovim introduces
          several key advantages. Its asynchronous architecture allows for
          smoother plugin interaction and better performance, especially when
          using language servers or other external tools. It also has a more
          modern plugin system, which makes it easier to manage and maintain
          custom configurations.
        </p>

        <h2 className="text-2xl font-semibold mb-2">LSP and Treesitter</h2>
        <p className="mb-6">
          <strong>Language Server Protocol (LSP)</strong> provides rich code
          analysis features like auto-completion, diagnostics, and
          go-to-definition, helping you write code more efficiently. It enables
          Neovim to communicate with language-specific servers that provide
          these functionalities.
        </p>
        <p className="mb-6">
          <strong>Treesitter</strong> is a parser generator tool used to power
          syntax highlighting, code folding, and more advanced text manipulation
          features. It helps Neovim understand the structure of code in a more
          efficient and accurate way, providing better syntax highlighting and
          faster code navigation.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Plugins I Use</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Treesitter</strong> – Enhances syntax highlighting and text
            manipulation.
          </li>
          <li>
            <strong>Harpoon</strong> – Quick file navigation and bookmarking.
          </li>
          <li>
            <strong>Telescope</strong> – A powerful fuzzy finder for files,
            buffers, and more.
          </li>
          <li>
            <strong>Neotest</strong> – Test framework integration for
            streamlined testing workflows.
          </li>
          <li>
            <strong>Nvim-tree</strong> – A file explorer tree for easy
            navigation.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">
          My Package Manager: Lazy
        </h2>
        <p className="mb-6">
          For plugin management, I use <strong>Lazy</strong>, which helps load
          plugins only when needed. This keeps Neovim lightweight and fast,
          improving performance without sacrificing functionality.
        </p>

        <footer className="text-sm text-gray-500">© 2024 by Ma1y0. </footer>
      </div>
    </main>
  );
}
