function Footer() {
  return (
    <footer className="p-4">
      <p className="text-center text-xs md:text-sm italic text-white">
        &copy; {new Date().getFullYear()} Wild Series. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
