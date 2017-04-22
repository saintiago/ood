#pragma once
#include "ICanvas.h"

class CCanvas :
	public ICanvas
{
public:
	CCanvas();
	~CCanvas();

	void SetColor(const Color color) override;
	void DrawLine(const Point & from, const Point &  to) override;
	void DrawEllipse(const Point &  left, const Point &  top, int width, int height) override;

private:
	Color m_currentColor;
	std::string m_canvas;
};

