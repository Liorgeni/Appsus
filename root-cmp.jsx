const { Route, Routes } = ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;
import { AboutIndex } from "./cmps/about-index.jsx";
import { Team } from "./cmps/team.jsx";
import { AppHeader } from "./cmps/app-header.jsx";
import { About } from "./views/about.jsx";
import { Home } from "./views/home.jsx";
import { MailIndex } from "./apps/mail/views/mail-index.jsx";
import { NoteIndex } from "./apps/note/views/note-index.jsx";
import { EmailCompose } from "./apps/mail/views/email-compose.jsx";
import { EmailDetails } from "./apps/mail/views/email-details.jsx";
import { NoteEdit } from "./apps/note/views/note-edit.jsx";

export function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<About />} path="/about">
            <Route element={<AboutIndex />} path="/about" />
            <Route element={<Team />} path="/about/team" />
            {/* <Route element={<Vision />} path="/about/vision" /> */}
          </Route>
          <Route path="/mail" element={<MailIndex />}>
            <Route path="/mail/details/:mailId" element={<EmailDetails />} />
          </Route>
          <Route path="/mail/compose" element={<EmailCompose />} />

          <Route path="/note" element={<NoteIndex />}>
            <Route path="/note/:noteId" element={<NoteEdit />} />
          </Route>
        </Routes>
      </section>
    </Router>
  );
}
