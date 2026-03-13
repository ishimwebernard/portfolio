import { Container } from "@/components/Container";

export function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-zinc-200/70 bg-white">
      <Container className="py-10 text-sm text-zinc-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {name}
          </div>
          <div className="text-zinc-500">
            Lots of Love❤️, Bernard
          </div>
        </div>
      </Container>
    </footer>
  );
}

