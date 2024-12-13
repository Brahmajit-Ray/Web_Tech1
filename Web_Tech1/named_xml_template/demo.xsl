<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" omit-xml-declaration="yes" indent="no"/>
    <xsl:variable name="username" select="'Joe'"/>
    <!-- Define a named template -->
    <xsl:template name="add-numbers">
        <xsl:param name="num1" />
        <xsl:param name="num2" />
        
        <!-- Output the sum -->
        <!--<result>-->
            <xsl:value-of select="$username"/><br/>
            <xsl:value-of select="$num1 + $num2" />
        <!--</result>-->
    </xsl:template>

    <!-- Entry point -->
    <xsl:template match="/">
        <!--<output>-->
            <!-- Call the named template with parameters -->
            <xsl:call-template name="add-numbers">
                <xsl:with-param name="num1" select="10" />
                <xsl:with-param name="num2" select="20" />
            </xsl:call-template>
        <!--</output>-->
    </xsl:template>
</xsl:stylesheet>

