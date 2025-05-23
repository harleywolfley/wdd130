import argparse
from _typeshed import Unused
from typing import Any

from ..formatting import base as formatter
from ..main import application as app

__all__ = ("get_style_guide",)

class Report:
    def __init__(self, application: app.Application) -> None: ...
    @property
    def total_errors(self) -> int: ...
    def get_statistics(self, violation: str) -> list[str]: ...

class StyleGuide:
    def __init__(self, application: app.Application) -> None: ...
    @property
    def options(self) -> argparse.Namespace: ...
    @property
    def paths(self) -> list[str]: ...
    def check_files(self, paths: list[str] | None = None) -> Report: ...
    def excluded(self, filename: str, parent: str | None = None) -> bool: ...
    def init_report(self, reporter: type[formatter.BaseFormatter] | None = None) -> None: ...
    def input_file(self, filename: str, lines: Unused = None, expected: Unused = None, line_offset: Unused = 0) -> Report: ...

def get_style_guide(**kwargs: Any) -> StyleGuide: ...
